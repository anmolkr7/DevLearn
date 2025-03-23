import { Searchbar } from "./searchbar"

export const Appbar=()=>{
    return(
        <div className="flex justify-between">
            <div>
                Youtube
            </div>
            <div>
                <Searchbar></Searchbar>
            </div>
            <div>
                Sign in
            </div>
        </div>
    )
}