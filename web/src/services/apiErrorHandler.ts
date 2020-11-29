type TResponse = {
  request: {
    status: number;
    statusText: string;
  };
};

const apiErrorHandler: any = (response: TResponse) => {
  const { status, statusText } = response.request;
  if (statusText === 'Unauthorized' && status === 401) {
    localStorage.removeItem('@Recursion:token');
    window.location.replace('/');
  }
  if (statusText === 'Not Found' && status === 404) {
    // console.log('Not Found');
  }
  if (statusText === 'Internal Server Error' && status === 500) {
    // console.log('Internal Server Error');
  }
};

export default apiErrorHandler;
