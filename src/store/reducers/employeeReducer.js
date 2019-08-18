import { 
    FETCH_EMPLOYEE_BEGIN,
    FETCH_EMPLOYEE_SUCCESS, 
    FETCH_EMPLOYEE_FAILURE 
} from "../actions/employeeActions";

const initialState = {
    items: [],
    page: 1,
    pages: '',
    total: '',
    loading: false,
    error: null
};

export default function employeeReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_EMPLOYEE_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };

        case FETCH_EMPLOYEE_SUCCESS:
            return {
                ...state,
                loading: false,
                items: action.payload.employeeData.data,
                page: action.payload.employeeData.page,
                pages: action.payload.employeeData.total_pages,
                total: action.payload.employeeData.total,
            };

        case FETCH_EMPLOYEE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                items: []
            };

        default:
            // ALWAYS have a default case in a reducer
            return state;
    }
}