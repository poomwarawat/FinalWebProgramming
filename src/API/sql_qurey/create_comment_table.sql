CREATE TABLE comments
(
  commentId int NOT NULL
  AUTO_INCREMENT,
  userId int NOT NULL,
  firstname TEXT,
  lastname TEXT,
  content TEXT,
  profileurl TEXT,
  PRIMARY KEY
  (commentId)
)