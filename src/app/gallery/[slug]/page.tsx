export default function GalleryPage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Gallery: {params.slug}</h1>
    </div>
  );
}
