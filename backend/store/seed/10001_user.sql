INSERT INTO 
  user (
    `id`, 
    `name`, 
    `email`,
    `password_hash`
  )
VALUES
  (
    101, 
    'guest', 
    'guest@example.com',
    -- "secret"
    '$2a$14$ajq8Q7fbtFRQvXpdCq7Jcuy.Rx1h/L4J60Otx.gyNLbAYctGMJ9tK'
  );
