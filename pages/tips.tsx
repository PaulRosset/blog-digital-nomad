import HeaderPost from "../components/HeaderPost";
import ImagePost from "../components/ImagePost";

export default function Tips() {
  return (
    <div className="max-w-screen-md m-auto my-8">
      <HeaderPost />
      <h1 className="text-4xl font-bold my-8">
        Boost User Security and Convenience with “Sign in with Apple“
        Integration on Your Website
      </h1>
      <p className="text-lg">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
      <ImagePost
        imgURL="https://images.unsplash.com/photo-1528837516156-0a7225a43641?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw2MzkyMXwwfDF8c2VhcmNofDh8fGljZWxhbmR8ZW58MHx8fHwxNjY3NjkyMzIw&ixlib=rb-4.0.3&q=80&w=1200"
        caption="There is a story of a dog and a dog"
      />
      <p className="text-lg">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
    </div>
  );
}
