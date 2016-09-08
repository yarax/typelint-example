import superagent from 'superagent';

export default (dispatch) => {
  return {
    onCounterClick: (index, diff) => {
      return () => {
        dispatch({
          type: 'COUNT',
          diff,
          index
        });
      };
    },
    onCommentsChange: (text) => {
      dispatch({
        type: 'COMMENT',
        text
      });
    },
    loadPets: () => {
      superagent.get('/pet/findByStatus')
        /**
         * @param ?error
         * @param {{body: [Pet]}} res
         */
        .end((error, res) => {
          if (error) {
            dispatch({
              type: 'ERROR',
              error
            });
          } else {
            dispatch({
              type: 'NEW_ENTITY',
              entityName: 'pets',
              entity: res.body.slice(0, 10)
            });
            dispatch({
              type: 'LOADED'
            });
          }
        });
    }
  };
};
