import * as ActionTypes from "./ActionTypes";
import axios from "axios";

export const fetchData = () => async dispatch => {
    const response = await axios.post("hiddenForApi",
        {
            query: `
            query requests {
                requests {
                    id
                    requesterName
                    price
                    profilePictureUrl
                    status
                    contentLink
                  }
              }
            `
        }
    );
    const result = await response.data;

    dispatch(getData(result));
}

const getData = (result) => ({
    type: ActionTypes.GET_DATA,
    payload: result
});

