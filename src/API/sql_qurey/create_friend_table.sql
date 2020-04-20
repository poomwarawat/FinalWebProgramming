USE runrena;
CREATE TABLE friend (
    resId int NOT NULL,
    userId int(255) NOT NULL,
    friendId int(255) NOT NULL,
    PRIMARY KEY (resId)
);