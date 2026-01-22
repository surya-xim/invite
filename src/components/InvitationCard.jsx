import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Phone, Mail, Instagram, MapPin } from 'lucide-react';

const InvitationCard = () => {
    return (
        <motion.div
            onContextMenu={(e) => e.preventDefault()}
            animate={{
                background: [
                    'linear-gradient(135deg, #cd6ca6 0%, #a63e7e 100%)',
                    'linear-gradient(135deg, #9c27b0 0%, #e91e63 100%)',
                    'linear-gradient(135deg, #cd6ca6 0%, #a63e7e 100%)'
                ]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            style={{
                width: '100vw',
                height: '100dvh', // Use dynamic viewport height for mobile browsers
                display: 'flex',
                flexDirection: 'column',
                // background: 'linear-gradient(135deg, #cd6ca6 0%, #a63e7e 100%)', // Handled by animate
                overflow: 'hidden',
                position: 'relative',
                userSelect: 'none',
                WebkitUserSelect: 'none'
            }}>
            {/* Logo/Icon Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                style={{
                    // position: 'absolute', // Removed absolute positioning
                    // top: '30px',          // Removed top
                    paddingTop: '30px',      // Added padding top
                    paddingBottom: '10px',   // Added padding bottom to separate from card
                    // left: 0,
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    zIndex: 30,
                    flexShrink: 0            // Prevent shrinking
                }}
            >
                <img
                    src="/Glazed Icon.png"
                    alt="Glazed Logo"
                    draggable="false"
                    style={{
                        width: '60px',
                        height: 'auto',
                        filter: 'drop-shadow(0 2px 10px rgba(0,0,0,0.1))',
                        pointerEvents: 'none'
                    }}
                />
            </motion.div>
            {/* Noise Texture Overlay */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                opacity: 0.15, // Subtle grain
                pointerEvents: 'none',
                zIndex: 1,
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                mixBlendMode: 'overlay'
            }} />

            {/* Animated Line Pattern Overlay */}
            <motion.div
                animate={{
                    backgroundPosition: ['0px 0px', '30px 30px']
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                }}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 1, // Brought forward to be visible over the mesh
                    opacity: 0.15, // Slightly increased visibility
                    backgroundImage: 'repeating-linear-gradient(45deg, rgba(255, 255, 255, 0.5) 0px, rgba(255, 255, 255, 0.5) 1px, transparent 1px, transparent 30px)',
                    mixBlendMode: 'overlay',
                    pointerEvents: 'none'
                }}
            />
            {/* Mesh Gradient Background (Linear Style) */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                overflow: 'hidden',
                zIndex: 0,
                filter: 'blur(40px)',
            }}>
                <motion.div
                    animate={{
                        x: ['-20%', '20%'],
                        rotate: [-10, 10]
                    }}
                    transition={{ duration: 10, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
                    style={{
                        position: 'absolute',
                        top: '-20%',
                        left: '-20%',
                        width: '150%',
                        height: '60%',
                        background: 'linear-gradient(90deg, transparent, rgba(255, 0, 128, 0.4), transparent)',
                        transform: 'rotate(-45deg)',
                    }}
                />
                <motion.div
                    animate={{
                        x: ['20%', '-20%'],
                        rotate: [10, -10]
                    }}
                    transition={{ duration: 15, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
                    style={{
                        position: 'absolute',
                        top: '40%',
                        left: '-20%',
                        width: '150%',
                        height: '60%',
                        background: 'linear-gradient(90deg, transparent, rgba(121, 40, 202, 0.4), transparent)',
                        transform: 'rotate(-45deg)',
                    }}
                />
                <motion.div
                    animate={{
                        x: ['-10%', '10%'],
                        scale: [1, 1.2, 1]
                    }}
                    transition={{ duration: 12, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
                    style={{
                        position: 'absolute',
                        bottom: '-10%',
                        left: '-20%',
                        width: '150%',
                        height: '50%',
                        background: 'linear-gradient(90deg, transparent, rgba(255, 77, 77, 0.3), transparent)',
                        transform: 'rotate(-45deg)',
                    }}
                />
            </div>

            {/* Sparkles Effect */}
            {[...Array(30)].map((_, i) => (
                <motion.div
                    key={i}
                    style={{
                        position: 'absolute',
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        width: `${Math.random() * 4 + 2}px`,
                        height: `${Math.random() * 4 + 2}px`,
                        backgroundColor: 'white',
                        borderRadius: '50%',
                        zIndex: 1,
                        filter: 'blur(1px)'
                    }}
                    animate={{
                        opacity: [0, 1, 0, 1, 0],
                        scale: [0, 1.2, 0.5, 1, 0],
                    }}
                    transition={{
                        duration: Math.random() * 3 + 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: Math.random() * 5
                    }}
                />
            ))}


            {/* Main Content Area: Flex-1 takes remaining space ABOVE footer */}
            <motion.div
                style={{
                    flex: 1,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'relative',
                    zIndex: 10,
                    paddingBottom: '20px' // Ensure card doesn't touch footer directly if space is tight
                }}
            >
                <motion.div
                    initial={{ scale: 0.9, opacity: 0, y: 20, filter: 'blur(10px)' }}
                    animate={{ scale: 1, opacity: 1, y: 0, filter: 'blur(0px)' }}
                    transition={{
                        duration: 1.2,
                        ease: [0.22, 1, 0.36, 1],
                        delay: 0.2
                    }}
                    style={{
                        width: '90%',
                        maxWidth: '400px',
                        maxHeight: '90%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <div
                        style={{
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                            position: 'relative' // For overlay
                        }}
                    >
                        <img
                            src="/Asset 5MPS CASsssTssss III.png"
                            alt="Invitation Card"
                            draggable="false"
                            style={{
                                width: '100%',
                                height: 'auto',
                                maxHeight: '65vh', // Slightly reduced to ensure footer fits
                                objectFit: 'contain',
                                display: 'block',
                                // Fix dullness: Increase saturation and contrast
                                filter: 'saturate(1.4) contrast(1.15) brightness(1.05)',
                                pointerEvents: 'none', // Prevent direct interaction
                                WebkitUserDrag: 'none',
                                userSelect: 'none'
                            }}
                        />
                        {/* Transparent overlay for extra protection */}
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            zIndex: 10
                        }} />
                    </div>
                </motion.div>
            </motion.div>


            {/* Footer Area: Fixed size, sticks to bottom in flex flow */}
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    paddingBottom: 'max(20px, env(safe-area-inset-bottom))', // Handle iPhone home indicator
                    paddingTop: '10px',
                    zIndex: 20
                }}
            >
                <div style={{
                    width: 'auto',
                    minWidth: '320px',
                    padding: '12px 24px',
                    background: 'rgba(255, 255, 255, 0.15)', // Lighter, more crystalline glass
                    backdropFilter: 'blur(15px)',
                    WebkitBackdropFilter: 'blur(15px)',
                    border: '1px solid rgba(255, 255, 255, 0.25)',
                    borderRadius: '50px', // Pill shape
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '20px',
                    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
                    fontFamily: '"Poppins", sans-serif'
                }}>
                    {/* Website */}
                    <a href="https://www.glazed.co.in" target="_blank" rel="noopener noreferrer" style={{
                        color: '#fff',
                        textDecoration: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        fontSize: '0.9rem',
                        fontWeight: 600,
                        letterSpacing: '0.5px'
                    }}>
                        <Globe size={18} strokeWidth={2} />
                        <span>www.glazed.co.in</span>
                    </a>

                    {/* Vertical Divider */}
                    <div style={{ width: '1px', height: '18px', background: 'rgba(255,255,255,0.4)' }}></div>

                    {/* Icons Row */}
                    <div style={{ display: 'flex', gap: '16px' }}>
                        <a href="https://maps.app.goo.gl/AWo9c2XveKNi8w1G6" target="_blank" rel="noopener noreferrer" style={{ color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }} aria-label="Location">
                            <MapPin size={18} strokeWidth={2.2} />
                        </a>

                        <a href="tel:+919861297221" style={{ color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }} aria-label="Call">
                            <Phone size={18} strokeWidth={2.2} />
                        </a>

                        <a href="mailto:contact@glazed.co.in" style={{ color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }} aria-label="Email">
                            <Mail size={18} strokeWidth={2.2} />
                        </a>

                        <a href="https://instagram.com/glazed.bbsr" target="_blank" rel="noopener noreferrer" style={{ color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }} aria-label="Instagram">
                            <Instagram size={18} strokeWidth={2.2} />
                        </a>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default InvitationCard;
