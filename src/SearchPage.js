import Location from "./Location";
export default function SearchPage(props) {
    // props.setIsLoading(true);
    return (
        <>
            <div className="row justify-content-md-center">
                <div  className='col text-center'>
                    <Location />
                </div>
            </div>
            <div className="row justify-content-md-center">
                <div  className='col-4 text-center'>
                    <h2 id="catálogo”">Catálogo</h2>
                </div>
            </div >

        </>
    );
}