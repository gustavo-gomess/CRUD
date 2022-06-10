//CRUD javascripi [basico]
const miniTwitter ={
    usuarios: [
        {
            username: 'gustavogomes',
        }
    ],
    posts: [
        {
            id: 1,
            owner: 'gustavogomes',
            content: 'Meu Primeiro tweet'
        }

    ]
}



//create
function criaPost(dados) {
    miniTwitter.posts.push({
        id: miniTwitter.posts.length + 1,
        owner: dados.owner,
        content: dados.content
    });
}
criaPost({owner:'gustavogomes', content:'Meu segundo tweet'})
//console.log(miniTwitter.posts)


//read
function pegaPost(){
    return miniTwitter.posts
}

console.log(pegaPost())

//udate
function atualizaContentPost(id, novoConteudo) {
    const postQuevaiSerAtualizado = pegaPost().find((post) => {
        return post.id === id;
    });
    console.log(postQuevaiSerAtualizado)
    postQuevaiSerAtualizado.content = novoConteudo
}

atualizaContentPost( 1, 'Novo conteudo do post')
//console.log(pegaPost())


//delete
function apagaPost(id){
    const listaDePostAtualizada = pegaPost().filter((postAtual) =>{
        return postAtual.id !== id; 
    })
    miniTwitter.posts = listaDePostAtualizada
}
apagaPost(1)
console.log(pegaPost());
  