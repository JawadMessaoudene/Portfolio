CREATE TABLE technology (
  id INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  technology_name VARCHAR(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE user (
  id INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  email VARCHAR(255) NOT NULL,
  hashedPassword VARCHAR(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO technology (technology_name)
VALUES ('JavaScript'), ('React');

INSERT INTO user (email, hashedPassword)
VALUES (
  'jawadadmin@gmail.com',
  '$argon2id$v=19$m=65536,t=5,p=1$+8QKgBU+Z7zr2EVICuFDOg$74Nu7DWmpa/+VW7543Xm28gd+ATVrhtCV2lAakJ4i+A'
);
