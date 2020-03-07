document.getElementById('btn1').addEventListener('click',getTxt)
document.getElementById('btn2').addEventListener('click',getJson)
document.getElementById('btn3').addEventListener('click',getExternal)

//获取本地纯文本数据
function getTxt() {
    fetch('test.txt')
        .then(res => res.text())
        .then(data=>{
                console.log(data)
              document.getElementById('output').innerHTML=data;
            }
        )
}

//获取本地json数据
function getJson() {
    fetch('posts.json')
        .then(res => res.json())
        .then(data=>{
                console.log(data)
            let output='';
            data.forEach(post =>{
                output+=`<li>${post.title}---${post.body}</li>`
            })
                document.getElementById('output').innerHTML=output;
            }
        )
}

//获取网络api
function getExternal() {
    fetch('https://api.github.com/users')
        .then(res => res.json())
        .then(data=>{
                console.log(data)
                let output='';
                data.forEach(user =>{
                    output+=`<li>${user.login}</li>`
                })
                document.getElementById('output').innerHTML=output;
            }
        )
}