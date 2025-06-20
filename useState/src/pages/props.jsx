
function Props({ idProps, name, react, comida, preco, corId, corId2 }) {
    return (
        <section>

            <h1>Aqui vamos estudar {idProps}</h1>

            <p>Meu nome é {name} e estou estudando {react}</p>

            <p>Produtos: {comida} - R$ {preco}</p>

<button style={{backgroundColor: corId}} >Rosa</button>
<button style={{backgroundColor: corId2, color:'white'}} >azul</button>


        </section>
    )
}

export default Props