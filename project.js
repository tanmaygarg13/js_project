/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/



// create a variable to hold your NFT's
const nfts = [];

// Function mintNFT() to store data into nfts;
function mintNft(name, height, weight, age, country){

    // Here we create object to get data
    const data = {
        user_name: name,
        user_height: height,
        user_weight: weight,
        user_age: age,
        user_country: country
    };

    // push data in nfts
    nfts.push(data);
}

// Function listNFTs() to display data present in nfts
function listNfts(){
    
    // Using for loop to iterate through array
    for(let i=0;i<nfts.length;i++){
        console.log("User:", i+1);
        console.log("User name:", nfts[i].user_name);
        console.log("User height:", nfts[i].user_height, "cm");
        console.log("User weight:", nfts[i].user_weight, "kg");
        console.log("User age:", nfts[i].user_age, "years");
        console.log("User country:", nfts[i].user_country);
        console.log();
    }
}

// Function getTotalSupply() to calculate total no of user created in nfts
function getTotalSupply(){
    return nfts.length;
}

// Calling mintNft function
mintNft("Tanmay",167, 55, 20, "India");
mintNft("Kushagra",173, 57, 20, "Korea");
mintNft("Praveen",180, 65, 20, "America");
mintNft("Satyam",192, 74, 20, "Japan");
mintNft("Dakshesh",176, 60, 20, "China");

// Calling listNfts function to display the data
listNfts();

// Calling getTotalSupply() function to get the number of total suppies i.e. total number of users created
console.log("Total number of user created in nfts:", getTotalSupply());