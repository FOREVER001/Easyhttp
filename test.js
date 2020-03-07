const http=new EasyHttp();
//请求数据
http.get("http://jsonplaceholder.typicode.com/users")
    .then((data)=>{
        console.log(data)
    })
    .catch(error=>console.log(error))


//传输数据
const data={
    name:"Henry",
    username:"mrs_zhang",
    email:'123456@qq.com'
};
//post user
http.post('http://jsonplaceholder.typicode.com/users',data)
    .then(data=>console.log(data))
    .catch(err=>console.log(err))

//更新
http.put('http://jsonplaceholder.typicode.com/users/2',data)
    .then(data=>console.log(data))
    .catch(err=>console.log(err))

//删除delete
http.delete('http://jsonplaceholder.typicode.com/users/2')
.then(data=>console.log(data))
.catch(err=>console.log(err))