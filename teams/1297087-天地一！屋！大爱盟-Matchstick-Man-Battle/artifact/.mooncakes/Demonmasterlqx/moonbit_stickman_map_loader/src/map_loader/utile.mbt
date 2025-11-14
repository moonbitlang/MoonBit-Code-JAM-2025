///| Load a Box2D body definition from JSON data or context.
pub fn get_bodydef_from_raw(ctx: String?, json: Json?) -> @box2d.B2BodyDef raise{
  let mut json_ : Json? = None
  match json{
    None => {
      json_ = match ctx {
        None => None
        Some(ctx) => Some(@json5.parse(ctx)) catch{
          err => {
            println("Failed to parse bodydef JSON: \{err}")
            None
          }
        }
      }
    }
    Some(_) => json_ = json
  }

  let body_json = match json_ {
    None => {
      raise MapLoaderError("No JSON data provided for body definition")
    }
    Some(j) => {
      map_body_def_from_json(j) catch {
       err => {
          raise err
        }
      }
    }
  }
  get_bodydef(body_json)
}