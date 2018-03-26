module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
  	// "build": {
	  //   // Copy ./app/index.html (right hand side) to ./build/index.html (left hand side).
	  //   "index.html": "index.html",

	  //   // Process all files in the array, concatenating them together
	  //   // to create a resultant app.js
	  //   "app.js": [
	  //     "javascripts/app.js"
	  //   ],

	  //   // Process all files in the array, concatenating them together
	  //   // to create a resultant app.css
	  //   "app.css": [
	  //     "stylesheets/app.scss"
	  //   ],

	  //   // Copy over the whole directory to the build destination.
	  //   "images/": "images/"
	  // }
	development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    }
  }
};
