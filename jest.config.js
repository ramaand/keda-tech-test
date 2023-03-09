module.exports = {
	transform: {
		"^.+\\.jsx?$": "babel-jest",
	},
  setupFilesAfterEnv: ["@testing-library/react"]
};
