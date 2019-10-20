json.pokemon @pokemon, :id, :name, :attack, :defense, :moves, :poke_type, :image_url, :item_ids
json.items @pokemon.items, :id, :name, :pokemon_id, :price, :happiness, :image_url