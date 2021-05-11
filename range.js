// The Content-Range header is missing in the HTTP Response 에러 대응한 middle ware 생성 
// 다음 에러는 react-app에서 발생한 것이 아니라 rest server에서 발생한것.
// 컨텐트의 range가 필요함. --> to know how many pages of resources there are in total, and build the pagination controls

module.exports = (req,res,next) => {
    res.header('Content-Range','posts 0-20/20');  //pagination
    next()

}
