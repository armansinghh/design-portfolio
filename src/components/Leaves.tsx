export function Leaves() {
  const leaves = ("/assets/hero/leaf.png");
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      
      <img 
        src={leaves} 
        alt="" 
        className="absolute -top-16 -left-16 w-72 md:w-96 opacity-100 -rotate-12 drop-shadow-2xl" 
      />
      <img 
        src={leaves} 
        alt="" 
        className="absolute -top-24 right-1/4 w-64 md:w-80 opacity-100 rotate-45 scale-x-[-1]" 
      />
      <img 
        src={leaves} 
        alt="" 
        className="absolute -top-10 -right-20 w-80 md:w-md opacity-100 rotate-120" 
      />
      <img 
        src={leaves} 
        alt="" 
        className="absolute -bottom-20 -left-10 w-72 md:w-96 opacity-100 rotate-  " 
      />

    </div>
  );
}