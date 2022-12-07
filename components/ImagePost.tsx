interface IImagePost {
  imgURL: string;
  caption?: string;
}

export default function ImagePost({ imgURL, caption }: IImagePost) {
  return (
    <div className="my-5 text-center">
      <img className="mb-2" src={imgURL} alt="Country Picture illustration" />
      {typeof caption === "string" ? (
        <span className="text-slate-400">{caption}</span>
      ) : null}
    </div>
  );
}
