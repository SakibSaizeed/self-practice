import { useEffect } from "react";
const Effect = () => {
    
  useEffect(() => {
   
    console.log("Component has entered the DOM (Mounted)");

    // Example: Setting up a timer or event listener
    const handleResize = () => console.log(window.innerWidth);
    window.addEventListener("resize", handleResize);

    // 2. UNMOUNT/CLEANUP CODE
    return () => {
      console.log("Component is leaving the DOM (Unmounted)");

      // Crucial: Clean up resources to prevent memory leaks
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <h2 className="text-2xl text-center mt-4">Effect Component</h2>
    </>
  );
};

export default Effect;
