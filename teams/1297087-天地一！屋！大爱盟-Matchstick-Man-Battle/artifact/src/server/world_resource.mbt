
pub fn load_map(game:Game, level : Int) -> Bool {
	match level {
		1 => {
			game.create_particle((10-25,15)) |> ignore
			game.create_particle((0,30)) |> ignore
			create_platform(game, (-24.5, 25), (1, 25), angle = 0.0, path = Some("./src/game-level1/images/plane1.png"))|> ignore;
			create_platform(game, (24.5, 25), (1, 25), angle = 0.0, path = Some("./src/game-level1/images/plane1.png"))|> ignore;
			create_platform(game, (0, 49.5), (23.6, 1), angle = 0.0, path = Some("./src/game-level1/images/plane1.png"))|> ignore;
			create_platform(game, (0, 0.5), (23.6, 1), angle = 0.0, path = Some("./src/game-level1/images/plane1.png"))|> ignore;
			create_movable_platform(game, (5,1), (10-25,10), (40-25,40), 16 ,(10-25,10), path = Some("./src/game-level1/images/plane1.png"))|> ignore;
			create_movable_platform(game, (5,1), (15,10), (-15,40), 16, (0,25), path = Some("./src/game-level1/images/plane1.png"))|> ignore;
			create_platform(game, (0, 10), (5, 1) , angle = 1.57, path = Some("./src/game-level1/images/plane1.png"))|> ignore;
			create_platform(game, (0, 40), (5, 1) , angle = 1.57,path = Some("./src/game-level1/images/plane1.png"))|> ignore;
			create_rotatable_platform(game, (-17, 25), (6, 1) , 10,path = Some("./src/game-level1/images/plane1.png"))|> ignore;
			create_rotatable_platform(game, (17, 25), (6, 1) ,20,path = Some("./src/game-level1/images/plane1.png"))|> ignore;
			return true
		}
		2 => {
			game.create_particle((10-25,15)) |> ignore
			game.create_particle((10,45)) |> ignore
			create_platform(game, (-24.5, 25), (1, 25), angle = 0.0, path = Some("./src/game-level2/images/plane3.png"))|> ignore;
			create_platform(game, (24.5, 25), (1, 25), angle = 0.0, path = Some("./src/game-level2/images/plane3.png"))|> ignore;
			create_platform(game, (0, 49.5), (23.6, 1), angle = 0.0, path = Some("./src/game-level2/images/plane2.png"))|> ignore;
			create_platform(game, (0, 0.5), (23.6, 1), angle = 0.0, path = Some("./src/game-level2/images/plane2.png"))|> ignore;
			create_movable_platform(game, (6,1), (-16,10), (16,10), 32, (-16,10), path = Some("./src/game-level2/images/plane1.png"))|> ignore;
			create_movable_platform(game, (6,1), (-16,20), (16,20), 32, (-8,20), path = Some("./src/game-level2/images/plane1.png"))|> ignore;
			create_movable_platform(game, (6,1), (-16,30), (16,30), 32, (0,30), path = Some("./src/game-level2/images/plane1.png"))|> ignore;
			create_movable_platform(game, (6,1), (-16,40), (16,40), 32, (8,40), path = Some("./src/game-level2/images/plane1.png"))|> ignore;
			create_movable_platform(game, (6,1), (16,5), (-16,5), 32, (16,5), path = Some("./src/game-level2/images/plane1.png"))|> ignore;
			create_movable_platform(game, (6,1), (16,15), (-16,15), 32, (8,15), path = Some("./src/game-level2/images/plane1.png"))|> ignore;
			create_movable_platform(game, (6,1), (16,25), (-16,25), 32, (0,25), path = Some("./src/game-level2/images/plane1.png"))|> ignore;
			create_movable_platform(game, (6,1), (16,35), (-16,35), 32, (-8,35), path = Some("./src/game-level2/images/plane1.png"))|> ignore;
			return true
		}
		3 => {
			game.create_particle((10-25,15)) |> ignore
			game.create_particle((10,45)) |> ignore
			create_platform(game, (0, 0.5), (10, 1), angle = 0.0, path = Some("./src/game-level3/images/plane2.png"))|> ignore;
			create_rotatable_platform(game, (-20, 8), (8, 0.8), 2, initial_angle=0.3, path = Some("./src/game-level3/images/plane2.png")) |> ignore;
			create_rotatable_platform(game, (15, 10), (8, 0.8), 2, initial_angle=1.2, path = Some("./src/game-level3/images/plane2.png")) |> ignore;
			create_rotatable_platform(game, (-5, 16), (8, 0.8), 2, initial_angle=2.8, path = Some("./src/game-level3/images/plane2.png")) |> ignore;
			create_rotatable_platform(game, (22, 19), (8, 0.8), -2, initial_angle=-0.9, path = Some("./src/game-level3/images/plane2.png")) |> ignore;
			create_rotatable_platform(game, (-18, 28), (8, 0.8), -2, initial_angle=0.7, path = Some("./src/game-level3/images/plane2.png")) |> ignore;
			create_rotatable_platform(game, (8, 33), (8, 0.8), 2, initial_angle=-1.5, path = Some("./src/game-level3/images/plane2.png")) |> ignore;
			create_rotatable_platform(game, (-10, 41), (8, 0.8), 2, initial_angle=2.4, path = Some("./src/game-level3/images/plane2.png")) |> ignore;
			create_rotatable_platform(game, (19, 45), (8, 0.8), 2, initial_angle=-2.1, path = Some("./src/game-level3/images/plane2.png")) |> ignore;
			return true
		}
		4 => {
			game.create_particle((10-25,15)) |> ignore
			game.create_particle((10,45)) |> ignore
			create_platform(game, (-24.5, 25), (1, 25), angle = 0.0, path = Some("./src/game-level4/images/plane1.png"))|> ignore;
			create_platform(game, (24.5, 25), (1, 25), angle = 0.0, path = Some("./src/game-level4/images/plane1.png"))|> ignore;
			create_platform(game, (0, 49.5), (23.6, 1), angle = 0.0, path = Some("./src/game-level4/images/plane2.png"))|> ignore;
			create_platform(game, (0, 0.5), (23.6, 1), angle = 0.0, path = Some("./src/game-level4/images/plane2.png"))|> ignore;

			create_rotatable_platform(game, (0, 25), (20, 0.8), 1, initial_angle=0, path = Some("./src/game-level4/images/plane1.png")) |> ignore;
			
			return true
		}
		5 => {
			
			game.create_particle((10-25,15)) |> ignore
			game.create_particle((15,44)) |> ignore
			create_platform(game, (-24.5, 25), (1, 25), angle = 0.0, path = Some("./src/game-level5/images/plane2.png"))|> ignore;
			create_platform(game, (24.5, 25), (1, 25), angle = 0.0, path = Some("./src/game-level5/images/plane2.png"))|> ignore;
			create_platform(game, (0, 49.5), (23.6, 1), angle = 0.0, path = Some("./src/game-level5/images/plane2.png"))|> ignore;
			create_platform(game, (0, 0.5), (23.6, 1), angle = 0.0, path = Some("./src/game-level5/images/plane2.png"))|> ignore; 
			create_rotatable_platform(game, (0, 25), (10, 0.8), 10, initial_angle=0, path = Some("./src/game-level5/images/plane2.png")) |> ignore;
			create_movable_platform(game, (5,1), (-18,5), (-18,10), 48, (-18,5), path = Some("./src/game-level5/images/plane1.png"))|> ignore;  
			create_movable_platform(game, (5,1), (18,5), (18,10), 48, (18,5), path = Some("./src/game-level5/images/plane1.png"))|> ignore;    
			create_movable_platform(game, (5,1), (-18,40), (-18,45), 48, (-18,40), path = Some("./src/game-level5/images/plane1.png"))|> ignore; 
			create_movable_platform(game, (5,1), (18,40), (18,45), 48, (18,40), path = Some("./src/game-level5/images/plane1.png"))|> ignore;    
			return true
		}
		_ => {
			return false
		}
	}
}

pub let level1:String=
#|{
#|  "world_settings": {
#|    "gravity": [
#|      0,
#|      -9.8
#|    ],
#|    "allow_sleeping": true,
#|    "auto_clear_forces": true
#|  },
#|  "bodies": [
#|    {
#|      "id": "body_1760796354261_8xkqzmqy7",
#|      "body_def": {
#|        "type": "static",
#|        "position": [
#|          -15.899999999999999,
#|          3.649999999999997
#|        ],
#|        "angle": 0,
#|        "linear_velocity": [
#|          0,
#|          0
#|        ],
#|        "angular_velocity": 0,
#|        "linear_damping": 0,
#|        "angular_damping": 0,
#|        "allow_sleep": true,
#|        "awake": true,
#|        "fixed_rotation": false,
#|        "bullet": false,
#|        "gravity_scale": 1
#|      },
#|      "fixtures": [
#|        {
#|          "shape": {
#|            "type": "box",
#|            "params": {
#|              "width": 10,
#|              "height": 1
#|            }
#|          },
#|          "fixture_def": {
#|            "density": 1,
#|            "friction": 0.3,
#|            "restitution": 0.5,
#|            "is_sensor": false,
#|            "filter_category_bits": 1,
#|            "filter_mask_bits": 65535,
#|            "filter_group_index": 0
#|          }
#|        }
#|      ],
#|      "visual_properties": {},
#|      "user_data": {}
#|    },
#|    {
#|      "id": "body_1760796380543_r63xejldw",
#|      "body_def": {
#|        "type": "static",
#|        "position": [
#|          -5.774999999999998,
#|          8.9
#|        ],
#|        "angle": 0,
#|        "linear_velocity": [
#|          0,
#|          0
#|        ],
#|        "angular_velocity": 0,
#|        "linear_damping": 0,
#|        "angular_damping": 0,
#|        "allow_sleep": true,
#|        "awake": true,
#|        "fixed_rotation": false,
#|        "bullet": false,
#|        "gravity_scale": 1
#|      },
#|      "fixtures": [
#|        {
#|          "shape": {
#|            "type": "box",
#|            "params": {
#|              "width": 10,
#|              "height": 1
#|            }
#|          },
#|          "fixture_def": {
#|            "density": 1,
#|            "friction": 0.3,
#|            "restitution": 0.5,
#|            "is_sensor": false,
#|            "filter_category_bits": 1,
#|            "filter_mask_bits": 65535,
#|            "filter_group_index": 0
#|          }
#|        }
#|      ],
#|      "visual_properties": {},
#|      "user_data": {}
#|    },
#|    {
#|      "id": "body_1760796448787_nhjivvkra",
#|      "body_def": {
#|        "type": "static",
#|        "position": [
#|          7.85,
#|          19.275
#|        ],
#|        "angle": 0,
#|        "linear_velocity": [
#|          0,
#|          0
#|        ],
#|        "angular_velocity": 0,
#|        "linear_damping": 0,
#|        "angular_damping": 0,
#|        "allow_sleep": true,
#|        "awake": true,
#|        "fixed_rotation": false,
#|        "bullet": false,
#|        "gravity_scale": 1
#|      },
#|      "fixtures": [
#|        {
#|          "shape": {
#|            "type": "box",
#|            "params": {
#|              "width": 1,
#|              "height": 19.45
#|            }
#|          },
#|          "fixture_def": {
#|            "density": 1,
#|            "friction": 0.3,
#|            "restitution": 0.5,
#|            "is_sensor": false,
#|            "filter_category_bits": 1,
#|            "filter_mask_bits": 65535,
#|            "filter_group_index": 0
#|          }
#|        }
#|      ],
#|      "visual_properties": {},
#|      "user_data": {}
#|    },
#|    {
#|      "id": "body_1760796499813_fcoevvg6m",
#|      "body_def": {
#|        "type": "static",
#|        "position": [
#|          16.0875,
#|          10.737499999999999
#|        ],
#|        "angle": 0,
#|        "linear_velocity": [
#|          0,
#|          0
#|        ],
#|        "angular_velocity": 0,
#|        "linear_damping": 0,
#|        "angular_damping": 0,
#|        "allow_sleep": true,
#|        "awake": true,
#|        "fixed_rotation": false,
#|        "bullet": false,
#|        "gravity_scale": 1
#|      },
#|      "fixtures": [
#|        {
#|          "shape": {
#|            "type": "polygon",
#|            "params": {
#|              "vertices": [
#|                [
#|                  4.112500000000001,
#|                  4.862500000000001
#|                ],
#|                [
#|                  -5.0375,
#|                  -3.8375000000000004
#|                ],
#|                [
#|                  -4.1875,
#|                  -4.887499999999999
#|                ],
#|                [
#|                  5.112500000000001,
#|                  3.8625000000000007
#|                ]
#|              ]
#|            }
#|          },
#|          "fixture_def": {
#|            "density": 1,
#|            "friction": 0.3,
#|            "restitution": 0.5,
#|            "is_sensor": false,
#|            "filter_category_bits": 1,
#|            "filter_mask_bits": 65535,
#|            "filter_group_index": 0
#|          }
#|        }
#|      ],
#|      "visual_properties": {},
#|      "user_data": {}
#|    }
#|  ],
#|  "joints": []
#|}