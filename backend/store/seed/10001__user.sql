INSERT INTO 
  user (
    `id`, 
    `name`, 
    `email`,
    `role`,
    `password_hash`
  )
VALUES
  (
    101, 
    'Chris Damon',
    'chris.damon@demo.com',
    'OWNER',
    -- "123456"
    '$2a$14$X6VCcqTv8khaTjg1EEgLMOwaYdCtmx0R6tHA7TLHWtWSUGV/ElC4W'
  );
