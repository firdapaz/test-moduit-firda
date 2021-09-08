const env = 'https://screening.moduit.id/';

export const getQuestionOne = () =>
  fetch(`${env}frontend/web/question/one`)
    .then(res => res.json())
    .then(
      result => {
        console.log(result);
      },
      error => {
        console.log(error);
      }
    );

// export const getQuestionOne = () => {
//   const resourceUrl = `${env}frontend/web/question/one`;
//   return fetch(resourceUrl)
//     .then(resp => resp.json)
//     .catch(error => {
//       return { err_message: error.message };
//     });
// };

// export const getQuestionTwo = () => {
//   const resourceUrl = `${env}frontend/web/question/one`;
//   return fetch(resourceUrl)
//     .then(resp => resp.json)
//     .catch(error => {
//       return { err_message: error.message };
//     });
// };
