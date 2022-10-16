import actions from "./actions.json";

export default function handler(req, res) {
    res.status(200).json(actions);
}
