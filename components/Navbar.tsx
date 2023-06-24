import { useSession, signOut, signIn } from "next-auth/react";
const Navbar = () => {
    const { data: session, status } = useSession();

    const handleSignOut = () => {
        signOut();
      };
    
      const handleSignIn = () => {
        signIn("google");
      };
    
    return (
        
        <div className="flex items-center justify-between w-[95%] mt-5">
          <div className="px-20 font-mono font-bold text-[22px]">edufile</div>
          {!session ? (
          <div>
            <button className="py-1.5 pl-5 pr-5 bg-white text-black rounded-md text-[18px]"
             type="button"
             onClick={handleSignIn}
            >signin</button>
          </div>
             ) : (
                <div onClick={handleSignOut}>Logout</div>
              )}
        </div>
    );
}

export default Navbar;