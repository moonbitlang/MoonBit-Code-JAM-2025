#!/usr/bin/env bash
set -euo pipefail

FILE="$1"
if [ -z "$FILE" ]; then
  echo "Usage: $0 path/to/game-level2.js"
  exit 2
fi
if [ ! -f "$FILE" ]; then
  echo "File not found: $FILE"
  exit 2
fi

BAK="$FILE.bak-$(date +%s)"
cp "$FILE" "$BAK"
echo "Backup created: $BAK"

perl -0777 -pe '
# BOOTSTRAP: insert before first Game$start_run(game)
s{(\bGame\$start_run\(\s*game\s*\))}{
  "/* __MMB_BOOTSTRAP_SNIPPET start */\n" .
  "try{ window.__mmb_game = game; }catch(e){}\n" .
  "try{ window.__mmb_get_state = function(){ try{ var players=[]; if(game && game.particle_list && game.particle_list.length){ for(my $i=0;$i<@{[0]}; $i++){} } }catch(e){return {players:[], frame_count:0};} }; }catch(e){}\n" .
  "/* __MMB_BOOTSTRAP_SNIPPET end */\n\n" . $1
}eigs' "$FILE" > "$FILE.tmp1" || true

# The above perl snippet used as templated may not run well across environments; we'll instead apply two targeted substitutions with safer regex
mv "$FILE.tmp1" "$FILE"

perl -0777 -pe '
  my $bootstrap = "/* __MMB_BOOTSTRAP_SNIPPET start */\ntry{ window.__mmb_game = game; }catch(e){}\ntry{ window.__mmb_get_state = function(){ try{ var players = []; if (game && game.particle_list && game.particle_list.length){ for (var i=0;i<game.particle_list.length;i++){ var p = game.particle_list[i]; var ctrl = (p && p.control) ? p.control : { health: 0 }; players.push({ index: (p && p.index)!==undefined ? p.index : i, health: (ctrl.health===undefined?0:ctrl.health), name: p && p.name ? p.name : null, ammo: p && p.ammo ? p.ammo : null, score: p && p.score ? p.score : null }); } } return { players: players, frame_count: (game && game.frame_count)? game.frame_count : 0 }; }catch(e){ return { players: [], frame_count: 0 }; } }; }catch(e){}\n/* __MMB_BOOTSTRAP_SNIPPET end */\n\n";

  s{(Game\$start_run\(\s*game\s*\))}{$bootstrap.$1}s;

  my $hit = "/* __MMB_HIT_SNIPPET start */\ntry{ if (typeof window !== 'undefined' && window.__mmb_trigger_hit) { try{ var __mmb_idx = (typeof particle !== 'undefined' && particle && particle.index!==undefined) ? particle.index : (typeof idx !== 'undefined' ? idx : null); var __mmb_hx = (typeof hx !== 'undefined') ? hx : undefined; var __mmb_hy = (typeof hy !== 'undefined') ? hy : undefined; var __mmb_dmg = (typeof damage !== 'undefined') ? damage : 0; try{ window.__mmb_trigger_hit(__mmb_idx, __mmb_hx, __mmb_hy, __mmb_dmg); }catch(e){} }catch(e){} }catch(e){}\n/* __MMB_HIT_SNIPPET end */\n";

  # Insert hit snippet after the health decrement line. Use a permissive pattern.
  s{(_bind\.health\s*=\s*_bind\.health\s*-\s*damage\s*\|\s*0\s*;)}{$1\n$hit}s;

' "$FILE" > "$FILE.tmp2"
mv "$FILE.tmp2" "$FILE"

echo "Patching complete: $FILE"
echo "- Look for comments '__MMB_BOOTSTRAP_SNIPPET' and '__MMB_HIT_SNIPPET' in file."

exit 0
