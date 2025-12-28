import mongoose, { model, Schema } from "mongoose";

const userSchema = new Schema({
    title: {
        type: String,
        required:true
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: false,
        default: "../public/images/default_game.png",
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    }

},
    {
    timestamps: true
    })

const Game = model("Game", userSchema);
export default Game;