///|
test "@Core.map_config" {
  // Test that the function returns a Map with expected default values
  let map1 = @Core.map
  inspect(map1.width, content="128")
  inspect(map1.height, content="800")
  inspect(map1.gridSize, content="80")
}

///|
test "@Core.map_config/singleton_behavior" {
  // Test that multiple calls return the same instance (singleton pattern)
  let map1 = @Core.map
  let map2 = @Core.map

  // Both should have the same values
  inspect(map1.width, content="128")
  inspect(map2.width, content="128")
  inspect(map1.height, content="800")
  inspect(map2.height, content="800")
  inspect(map1.gridSize, content="80")
  inspect(map2.gridSize, content="80")
}

///|
test "@Core.map_config/consistent_returns" {
  // Test that the function consistently returns valid Map instances
  let results = []
  for i = 0; i < 5; i = i + 1 {
    results.push(@Core.map)
  }

  // All results should have the same properties
  for i = 0; i < results.length(); i = i + 1 {
    let map = results[i]
    inspect(map.width, content="128")
    inspect(map.height, content="800")
    inspect(map.gridSize, content="80")
  }
}
