"use client";
import { useState, useEffect, useRef } from "react";
import { Code2 } from "lucide-react";


const techData = [
    {
      id: 1,
      title: "Web Development",
      content:
        "HTML, CSS, JavaScript, React, Node.js, Express.js, Tailwind, GSAP, MERN Stack",
      energy: 95,
    },
    {
      id: 2,
      title: "Programming",
      content:
        "C, C++, Java, Python, SQL",
      energy: 90,
    },
    {
      id: 3,
      title: "AI & Analytics",
      content:
        "Machine Learning, Data Analytics, Power BI, DBMS",
      energy: 88,
    },
    {
      id: 4,
      title: "Software Engineering",
      content:
        "Docker, Software Testing, Software Engineering, Open Source",
      energy: 82,
    },
    {
      id: 5,
      title: "Experience",
      content:
        "Hackathons, Freelancing, AIML Community, GDG On Campus NKOCET",
      energy: 85,
    },
  ];

export default function TechStack({}) {
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>(
    {}
  );
  const [viewMode, setViewMode] = useState<"orbital">("orbital");
  const [rotationAngle, setRotationAngle] = useState<number>(0);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [pulseEffect, setPulseEffect] = useState<Record<number, boolean>>({});
  const [centerOffset, setCenterOffset] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [activeNodeId, setActiveNodeId] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<Record<number, HTMLDivElement | null>>({});
  const [isMobile, setIsMobile] = useState(false);

useEffect(() => {
  const checkMobile = () => {
    setIsMobile(window.innerWidth < 768);
  };

  checkMobile();

  window.addEventListener("resize", checkMobile);

  return () => window.removeEventListener("resize", checkMobile);
}, []);

  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === containerRef.current || e.target === orbitRef.current) {
      setExpandedItems({});
      setActiveNodeId(null);
      setPulseEffect({});
      setAutoRotate(true);
    }
  };

  const toggleItem = (id: number) => {
    setExpandedItems((prev) => {
      const newState = { ...prev };
      Object.keys(newState).forEach((key) => {
        if (parseInt(key) !== id) {
          newState[parseInt(key)] = false;
        }
      });

      newState[id] = !prev[id];

      if (!prev[id]) {
        setActiveNodeId(id);
        setAutoRotate(false);


        centerViewOnNode(id);
      } else {
        setActiveNodeId(null);
        setAutoRotate(true);
        setPulseEffect({});
      }

      return newState;
    });
  };

  useEffect(() => {
    let rotationTimer: NodeJS.Timeout;

    if (autoRotate && viewMode === "orbital") {
      rotationTimer = setInterval(() => {
        setRotationAngle((prev) => {
          const newAngle = (prev + 0.3) % 360;
          return Number(newAngle.toFixed(3));
        });
      }, 50);
    }

    return () => {
      if (rotationTimer) {
        clearInterval(rotationTimer);
      }
    };
  }, [autoRotate, viewMode]);

  const centerViewOnNode = (nodeId: number) => {
    if (viewMode !== "orbital" || !nodeRefs.current[nodeId]) return;

    const nodeIndex = techData.findIndex((item) => item.id === nodeId);
    const totalNodes = techData.length;
    const targetAngle = (nodeIndex / totalNodes) * 360;

    setRotationAngle(270 - targetAngle);
  };

  const calculateNodePosition = (index: number, total: number) => {
    const angle = ((index / total) * 360 + rotationAngle) % 360;
    const radius = isMobile ? 145 : 260;
    const radian = (angle * Math.PI) / 180;

    const x = radius * Math.cos(radian) + centerOffset.x;
    const y = radius * Math.sin(radian) + centerOffset.y;

    const zIndex = Math.round(100 + 50 * Math.cos(radian));
    const opacity = Math.max(
      0.4,
      Math.min(1, 0.4 + 0.6 * ((1 + Math.sin(radian)) / 2))
    );

    return { x, y, angle, zIndex, opacity };
  };



  

  return (
    <section
    id="skills"
      className="w-full min-h-screen pt-12 flex flex-col items-center bg-black overflow-hidden"
      ref={containerRef}
      onClick={handleContainerClick}
    >
        <div className="relative z-10 mb-8 text-center">
        <h2 className="text-2xl font-bold tracking-tight text-white sm:text-6xl lg:text-6xl">
    Tech{" "}
    <span className="bg-gradient-to-r from-blue-300 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
      Ecosystem
    </span>
  </h2>

  <p className="mx-auto mt-4 max-w-2xl text-base text-slate-400 sm:text-lg">
    Technologies, tools, and domains I continuously explore and build with.
  </p>
</div>
<div className="relative w-full max-w-4xl h-[620px] md:h-[700px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute w-full h-[500px] md:h-[700px] flex items-center justify-center"
          ref={orbitRef}
          style={{
            perspective: "1000px",
            transform: `translate(${centerOffset.x}px, ${centerOffset.y}px)`,
          }}
        >
          <div className="absolute w-28 h-28 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-purple-500 via-blue-500 to-teal-500 animate-pulse flex items-center justify-center z-10">
            <div className="absolute w-20 h-20 rounded-full border border-white/20 animate-ping opacity-70"></div>
            <div
              className="absolute w-24 h-24 rounded-full border border-white/10 animate-ping opacity-50"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div className="flex items-center justify-center text-xs md:text-[15px] font-bold text-black w-16 h-16 rounded-full bg-white">
  RU
</div>
          </div>

          <div className="absolute w-[290px] h-[290px] md:w-[520px] md:h-[520px] animate-[spin_40s_linear_infinite] rounded-full border border-blue-500/20"></div>

          {techData.map((item, index) => {
            const position = calculateNodePosition(index, techData.length);
            const isExpanded = expandedItems[item.id];

            const isPulsing = pulseEffect[item.id];
            const Icon = Code2;

            const nodeStyle = {
              transform: `translate(${position.x.toFixed(2)}px, ${position.y.toFixed(2)}px)`,
              zIndex: isExpanded ? 200 : Math.round(position.zIndex),
              opacity: isExpanded ? 1 : Number(position.opacity.toFixed(3)),
            };

            return (
              <div
                key={item.id}
                ref={(el) => {
                  nodeRefs.current[item.id] = el;
                }}
                className="absolute transition-all duration-700 cursor-pointer"
                style={nodeStyle}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleItem(item.id);
                }}
              >
                <div
                  className={`absolute rounded-full -inset-1 ${
                    isPulsing ? "animate-pulse duration-1000" : ""
                  }`}
                  style={{
                    background: `radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 70%)`,
                    width: `${item.energy * 0.5 + 40}px`,
                    height: `${item.energy * 0.5 + 40}px`,
                    left: `-${(item.energy * 0.5 + 40 - 40) / 2}px`,
                    top: `-${(item.energy * 0.5 + 40 - 40) / 2}px`,
                  }}
                ></div>

                <div
                  className={`
                  w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center
                  ${
                    isExpanded
  ? "bg-blue-400 text-black"
  : "bg-black text-white"
                  }
                  border-2 
                  ${
                    isExpanded
  ? "border-blue-400 shadow-lg shadow-blue-500/30"
  : "border-white/40"
                  }
                  transition-all duration-300 transform
                  ${isExpanded ? "scale-150" : ""}
                `}
                >
                  <Icon size={22} />
                </div>

                <div
                  className={`
                  absolute top-12 md:top-14 left-1/2 -translate-x-1/2 w-[90px] md:w-[120px] text-center
                  text-[11px] md:text-sm font-semibold tracking-wider
                  transition-all duration-300
                  ${isExpanded ? "text-white scale-125" : "text-slate-300"}
                `}
                >
                  {item.title}
                </div>

                {isExpanded && (
                  <div className="absolute top-24 left-1/2 -translate-x-1/2 z-50 w-[220px] md:w-[340px] rounded-2xl border border-blue-500/20 bg-[#07111f]/95 p-6 shadow-[0_0_45px_rgba(59,130,246,0.18)] backdrop-blur-2xl overflow-hidden">
                    
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-px h-3 bg-white/50"></div>
                    <div className="pb-2">
                      
                    <h3 className="text-2xl font-semibold text-white">
                        {item.title}
                      </h3>
                    </div>
                    <div className="text-sm md:text-base text-slate-300 leading-8 mt-3">
                      <p>{item.content}</p>

                      

                     
                                
                                  
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
