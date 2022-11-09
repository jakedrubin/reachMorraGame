# reachMorraGame
Reach Morra Game

Morra is a game where two players each pick a number to "throw" and guess what the sum of the numbers thrown will be.
The game has two players, the deployer (Alice) and the attacher (Bob). Alice starts the game by setting the bet and 
deploying the contract, which Bob then attaches to. Alice starts by chosing a number to throw, and guessing the sum, 
then Bob does the same. The game continues until someone wins by guessing the sum. 

index.rsh defines the backend logic of the game
index.js, index.css, and the views folder define the frontend GUI
indexOGFmt.mjs and indexReactFmt.mjs can be ignored, they are old versions of index from before the repo started
