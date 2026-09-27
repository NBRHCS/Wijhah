CREATE TABLE `saved` (
	`user` text NOT NULL,
	`key` text NOT NULL,
	`value` text NOT NULL,
	PRIMARY KEY(`user`, `key`)
);
