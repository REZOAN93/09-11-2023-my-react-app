const Post = ({ user }) => {
  const {title,body} = user;
  return <div>
    <div className="card card-compact bg-red-300 h-64 shadow-xl border">
  <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{body}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-sm btn-primary">Read More</button>
    </div>
  </div>
</div>
  </div>;
};

export default Post;
