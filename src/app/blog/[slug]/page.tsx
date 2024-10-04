interface Props {
  params: {
    slug: string;
  };
}

export default function Post({ params }: Props) {
  return (
    <div>
      <p>Post: {params.slug}</p>
    </div>
  );
}
