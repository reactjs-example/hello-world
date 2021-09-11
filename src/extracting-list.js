function ListItems(props) {
    const values = props.value;

    return (
        <li>
            {values}
        </li>
    );
}

function NumberList(props) {
    const numbers = props.numbers;

    const numberList = numbers.map(
        (number) => {
            <li key={number.toString()}>
                {numbers}
            </li>
            // <ListItems key={number.toSting()} values={numbers}></ListItems>
        }
    );
}

function Blog(props) {
    const posts = props.posts;


    console.log(posts);
    const sidebar = (
        <ul>
            {props.posts.map((post) => 
            
                <li key={post.id}>
                    {post.title}
                    {console.log(post.title)}
                </li>
        
            )
            }
        </ul>)

    console.log(sidebar);

 

    
    const cont = props.posts.map(
        (post) => 
            <div key={post.id}>
                <h1>{post.title}</h1>
                <p>{post.content}</p>
            </div>
        
    );


    return (
        <div>
            {sidebar}
            <hr />
            {cont}
        </div>
    );
}


/*

function Blog(props) {
    const sidebar = (
      <ul>
        {props.posts.map((post) =>
          <li key={post.id}>
            {post.title}
          </li>
        )}
      </ul>
    );
    const content = props.posts.map((post) =>
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
      </div>
    );
    return (
      <div>
        {sidebar}
        <hr />
        {content}
      </div>
    );
  }
*/

export default Blog