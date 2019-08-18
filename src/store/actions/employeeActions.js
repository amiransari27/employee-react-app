import axios from 'axios';

export const FETCH_EMPLOYEE_BEGIN   = 'FETCH_EMPLOYEE_BEGIN';
export const FETCH_EMPLOYEE_SUCCESS = 'FETCH_EMPLOYEE_SUCCESS';
export const FETCH_EMPLOYEE_FAILURE = 'FETCH_EMPLOYEE_FAILURE';

export const fetchEmployeeBegin = () => ({
  type: FETCH_EMPLOYEE_BEGIN
});

export const fetchEmployeeSuccess = employeeData => ({
  type: FETCH_EMPLOYEE_SUCCESS,
  payload: { employeeData }
});

export const fetchEmployeeFailure = error => ({
  type: FETCH_EMPLOYEE_FAILURE,
  payload: { error }
});
export function fetchEmployees(page) {
    return async dispatch => {
      dispatch(fetchEmployeeBegin());
      const { data } = await axios.get(`https://reqres.in/api/users?per_page=5&page=${page}`)
        if(data.error){
            dispatch(fetchEmployeeFailure(data.error))
        }else{
            dispatch(fetchEmployeeSuccess(data));
        }
    };
}