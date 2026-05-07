

export default function AnimatedGrid() {
    return (
        <>
            <div className="absolute inset-0 overflow-hidden opacity-20">

                <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(to bottom, transparent 0%, transparent calc(100% - 1px), #1bc608 100%)',
                    backgroundSize: '100% 50px',
                    animation: 'gridScroll 2s linear infinite'
                }} />

                <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(to right, transparent 0%, transparent calc(100% - 1px), #ff7cd1 100%)',
                    backgroundSize: '50px 100%',
                }} />

                <style>{`
        @keyframes gridScroll {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(50px);
          }
        }
      `}</style>

            </div>
        </>
    )
}