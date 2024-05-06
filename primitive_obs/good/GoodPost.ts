import User from "../../default/User"
import Reactions from "./Reactions"

type GoodPost = {
    id: number
    title: string
    text: string
    creationDate: Date
    author: User
    reactions: Reactions
}