UPDATE products SET price = $2 WHERE product_id = $1
returning *;