import "react-photo-album/styles.css";
import PhotoAlbum from 'react-photo-album';

const CustomPhoto = ({ photo, onClick }) => {
    return (
        <div className="relative w-full h-full rounded-sm overflow-hidden">
            <img
                src={photo.img}
                loading="eager"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition" />

            {/* Titre */}
            <div className="absolute bottom-0 left-0 w-full p-3 bg-gradient-to-t from-black/70 to-transparent">
                <p className="relative text-white font-semibold text-sm md:text-[1rem]">
                    {photo.title}
                </p>
            </div>
        </div>
    )
}

export default function Gallery({ categories }) {
    return( 
    <PhotoAlbum 
        layout='masonry'
        spacing={10}
        breakpoints={[650,850,568,65,547,52]}
        photos={categories}
        render={{
            photo: ({ onClick }, { photo, width, height }) => (
                <CustomPhoto
                    key={photo.title}
                    photo={photo}
                    onClick={onClick}
                />
            ),
        }}
    />);
}