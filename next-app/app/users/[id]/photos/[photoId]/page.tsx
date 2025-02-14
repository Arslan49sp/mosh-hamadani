interface Props {
  params: { id: number; photoId: number };
}
const PhotoPage = ({ params: { id, photoId } }: Props) => {
  return (
    <div>
      UserPage {id} photo {photoId}
    </div>
  );
};

export default PhotoPage;
