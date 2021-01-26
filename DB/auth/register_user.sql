INSERT INTO users (username, hash, first_name, last_name,email, is_admin)
VALUES ($1,$2,$3,$4,$5,$6)
RETURNING *;