import React, { useEffect, useRef } from 'react';

const CliveFluidBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const q = canvas.getContext('2d', { alpha: false });
    if (!q) return;

    let I = window.innerWidth;
    let E = window.innerHeight;
    canvas.width = I;
    canvas.height = E;

    // t is grid cell size (increase size to improve performance)
    const t_size = Math.max(12, Math.min(24, Math.floor(Math.min(I, E) / 60)));
    let N = Math.max(35, Math.floor(I / t_size));
    let R = Math.max(25, Math.floor(E / t_size));
    let o = N * R;

    const B = new Int8Array([0, 1, 0, -1, 0, 1, -1, -1, 1]);
    const D = new Int8Array([0, 0, 1, 0, -1, 1, 1, -1, -1]);
    const O = new Float32Array([4 / 9, 1 / 9, 1 / 9, 1 / 9, 1 / 9, 1 / 36, 1 / 36, 1 / 36, 1 / 36]);
    const W = new Int8Array([0, 3, 4, 1, 2, 7, 8, 5, 6]);

    const H = 0.18;
    const P = H * H;
    const S = 0.75;
    const T = 1 / (0.18 + 0.5);

    let G = new Float32Array(9 * o);
    let Q = new Float32Array(9 * o);
    let X = new Float32Array(o);
    let Y = new Float32Array(o);
    let J = new Float32Array(o);
    let U = new Float32Array(o);
    let V = new Float32Array(o);

    const j = (t: number, o: number) => o * N + t;
    const K = (val: number, min: number, max: number) => (val < min ? min : max < val ? max : val);

    const z = (t: number, o: number) => {
        let r = t * t + o * o;
        return P < r ? [t * (r = H / Math.sqrt(r)), o * r] : [t, o];
    };

    const reset = () => {
        for (let r = 0; r < R; r++) {
            for (let e = 0; e < N; e++) {
                let n = j(e, r);
                X[n] = 1;
                Y[n] = 0;
                J[n] = 0;
                for (let a = 0; a < 9; a++) G[9 * n + a] = O[a];
                U[n] = 0;
            }
        }
    };
    reset();

    const p = (t: number, o: number, r: number, e: number, n: number = 1) => {
        let a = Math.floor(K(t / (I / N), 1, N - 2));
        let i = Math.floor(K(o / (E / R), 1, R - 2));

        for (let h = i - 3; h <= i + 3; h++) {
            for (let s = a - 3; s <= a + 3; s++) {
                let c = s - a;
                let u = h - i;
                let f = c * c + u * u;
                if (!(s <= 0 || N - 1 <= s || h <= 0 || R - 1 <= h)) {
                    let _p = j(s, h);
                    f = Math.exp(-f / 9);
                    U[_p] = K(U[_p] + 0.6 * f * n, 0, 1.5);
                    let d = Y[_p];
                    let v = J[_p];
                    let g, m;

                    if (r !== undefined && e !== undefined) {
                        let l_denom = Math.sqrt(r * r + e * e) + 1e-6;
                        g = r / l_denom * 0.12 * f * n;
                        m = e / l_denom * 0.12 * f * n;
                    } else {
                        let l = 0.02 * f * n;
                        g = c * l;
                        m = u * l;
                    }

                    let res = z(d + g, v + m);
                    let y = res[0];
                    let w = res[1];
                    Y[_p] = y;
                    J[_p] = w;

                    let _ = X[_p];
                    let M = y * y + w * w;
                    for (let k = 0; k < 9; k++) {
                        let x = 3 * (B[k] * y + D[k] * w);
                        x = O[k] * _ * (1 + x + 0.5 * x * x - 1.5 * M);
                        let $ = G[9 * _p + k];
                        G[9 * _p + k] = $ + S * (x - $);
                    }
                }
            }
        }
    };

    let numSplashes = Math.max(20, Math.floor(N * R / 500));
    for (let i = 0; i < numSplashes; i++) {
        let _l = Math.random() * I;
        let _v = Math.random() * E;
        let _h = Math.random() * Math.PI * 2;
        let _s = 20 + 100 * Math.random();
        let _g = Math.cos(_h) * _s;
        let _m = Math.sin(_h) * _s;
        for (let _c = -10; _c < 11; _c++) {
            for (let _u = -10; _u < 11; _u++) {
                p(_l + _c, _v + _u, _g, _m, 3);
            }
        }
    }

    let running = true;
    let scheduled = false;
    let reqId = 0;
    let time = 0;
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    // Pause when the tab is hidden or the hero has scrolled out of view.
    const isPaused = () => document.hidden || window.scrollY > window.innerHeight * 0.9;

    // Schedule the next frame — never while paused or under reduced motion.
    function schedule() {
      if (!scheduled && running && !motionQuery.matches) {
        scheduled = true;
        reqId = requestAnimationFrame(tick);
      }
    }

    const tick = () => {
        scheduled = false;
        if (!running) return;
        time += 0.01;

        // Sahnede fare hareket etmese bile akışın devam etmesi için otomatik enjeksiyon
        let cx = I / 2;
        let cy = E / 2;
        let pRadius = Math.min(I, E) * 0.35;
        
        let a1x = cx + Math.cos(time * 1.3) * pRadius;
        let a1y = cy + Math.sin(time * 0.9) * pRadius;
        p(a1x, a1y, -Math.sin(time * 1.3), Math.cos(time * 0.9), 0.15);

        let a2x = cx + Math.sin(time * 0.8) * pRadius * 1.2;
        let a2y = cy + Math.cos(time * 1.4) * pRadius * 1.2;
        p(a2x, a2y, Math.cos(time * 0.8), -Math.sin(time * 1.4), 0.15);

        for (let o_iter = 0; o_iter < 2; o_iter++) {
            for (let r = 0; r < R; r++) {
                for (let e = 0; e < N; e++) {
                    let l = j(e, r);
                    let n = 9 * l;
                    let a = 0, i = 0, h = 0;
                    for (let s = 0; s < 9; s++) a += G[n + s];
                    for (let s = 0; s < 9; s++) {
                        i += G[n + s] * B[s];
                        h += G[n + s] * D[s];
                    }
                    let i_norm = i / a;
                    let h_norm = h / a;
                    let c = i_norm * i_norm + h_norm * h_norm;

                    if (P < c) {
                        let c_factor = H / Math.sqrt(c);
                        i_norm *= c_factor;
                        h_norm *= c_factor;
                    }
                    X[l] = a;
                    Y[l] = i_norm;
                    J[l] = h_norm;
                    let u = i_norm * i_norm + h_norm * h_norm;

                    for (let s = 0; s < 9; s++) {
                        let f = 3 * (B[s] * i_norm + D[s] * h_norm);
                        f = O[s] * a * (1 + f + 0.5 * f * f - 1.5 * u);
                        Q[n + s] = G[n + s] + T * (f - G[n + s]);
                    }
                }
            }

            G.fill(0);
            for (let r = 0; r < R; r++) {
                for (let e = 0; e < N; e++) {
                    let l = j(e, r);
                    let n = 9 * l;
                    for (let s = 0; s < 9; s++) {
                        let p_x = e + B[s];
                        let p_y = r + D[s];
                        if (0 <= p_x && p_x < N && 0 <= p_y && p_y < R) {
                            let target_idx = j(p_x, p_y);
                            G[9 * target_idx + s] += Q[n + s];
                        } else {
                            G[n + W[s]] += Q[n + s];
                        }
                    }
                }
            }

            let v_decay = 0.02;
            for (let g = 0; g < R; g++) {
                for (let m = 0; m < N; m++) {
                    let y = j(m, g);
                    let w = Y[y] * N;
                    let _ = g - J[y] * R * v_decay;
                    w = K(m - w * v_decay, 0.5, N - 1.5);
                    _ = K(_, 0.5, R - 1.5);
                    let M = Math.floor(w);
                    let k = Math.floor(_);
                    w = w - M;
                    _ = _ - k;
                    let x = j(M, k);
                    let $ = j(M + 1, k);
                    let S_idx = j(M, k + 1);
                    let M_idx = j(M + 1, k + 1);
                    let k_val = (1 - w) * (1 - _) * U[x] + w * (1 - _) * U[$] + (1 - w) * _ * U[S_idx] + w * _ * U[M_idx];
                    V[y] = 0.995 * k_val;
                }
            }
            U.set(V);
        }

        q.globalCompositeOperation = "source-over";
        q.fillStyle = "rgb(0,0,0)";
        q.fillRect(0, 0, I, E);

        let z_w = I / N;
        let A_h = E / R;

        for (let b = 0; b < R; b++) {
            for (let L = 0; L < N; L++) {
                let C = j(L, b);
                let F = K(U[C], 0, 1);
                let vel_mag = Math.sqrt(Y[C] * Y[C] + J[C] * J[C]);
                // Mavi ve Yeşil tonlarına kayan dinamik renk paleti
                let hue = 220 + Math.sin(time + L*0.02) * 15 - K(800 * vel_mag, 0, 100);
                let lightness = 10 + 75 * F;
                q.fillStyle = "hsl(" + hue + ", 90%, " + lightness + "%)";
                q.fillRect(L * z_w, b * A_h, 0.5 + z_w, 0.5 + A_h);
            }
        }

        schedule();
    };

    if (motionQuery.matches) {
        // Reduced motion: compose a single richer static frame and leave it on screen.
        for (let i = 0; i < 90; i++) tick();
    } else {
        schedule();
    }

    const updateRunState = () => {
        running = !isPaused();
        if (running) schedule();
    };
    const onMotionChange = () => {
        if (motionQuery.matches) {
            if (reqId) cancelAnimationFrame(reqId);
            scheduled = false;
        } else {
            running = !isPaused();
            schedule();
        }
    };
    document.addEventListener('visibilitychange', updateRunState);
    window.addEventListener('scroll', updateRunState, { passive: true });
    motionQuery.addEventListener('change', onMotionChange);

    let d = 0;
    const applyDrag = (x: number, y: number, dx: number, dy: number) => {
        let prevX = x - dx;
        let prevY = y - dy;
        let s = Math.hypot(dx, dy);
        if (s > 1e-6) {
            let c = 0.75 * Math.min(I / N, E / R);
            let r_val = d + s;
            let u_steps = Math.floor(r_val / c);
            for (let f = 1; f <= u_steps; f++) {
                let l_val = (c * f - d) / s;
                p(prevX + dx * l_val, prevY + dy * l_val, dx, dy, 0.5);
            }
            d = r_val - u_steps * c;
        }
    };

    let lastMouse: {x: number, y: number} | null = null;
    let isMouseDown = false;

    const handleMouseDown = (e: MouseEvent) => {
        d = 0;
        p(e.clientX, e.clientY, 0, 0, 3);
        lastMouse = {x: e.clientX, y: e.clientY};
        isMouseDown = true;
    };
    const handleMouseUp = () => { isMouseDown = false; };
    const handleMouseMove = (e: MouseEvent) => {
        if (lastMouse) {
            applyDrag(e.clientX, e.clientY, e.clientX - lastMouse.x, e.clientY - lastMouse.y);
        }
        lastMouse = {x: e.clientX, y: e.clientY};
    };

    const handleTouchStart = (e: TouchEvent) => {
        if (e.touches.length > 0) {
            d = 0;
            p(e.touches[0].clientX, e.touches[0].clientY, 0, 0, 3);
            lastMouse = {x: e.touches[0].clientX, y: e.touches[0].clientY};
        }
    };
    const handleTouchMove = (e: TouchEvent) => {
        if (e.touches.length > 0 && lastMouse) {
            let t = e.touches[0];
            applyDrag(t.clientX, t.clientY, t.clientX - lastMouse.x, t.clientY - lastMouse.y);
            lastMouse = {x: t.clientX, y: t.clientY};
        }
    };

    const handleResize = () => {
        I = window.innerWidth;
        E = window.innerHeight;
        canvas.width = I;
        canvas.height = E;

        let new_t_size = Math.max(12, Math.min(24, Math.floor(Math.min(I, E) / 60)));
        N = Math.max(35, Math.floor(I / new_t_size));
        R = Math.max(25, Math.floor(E / new_t_size));
        o = N * R;

        G = new Float32Array(9 * o);
        Q = new Float32Array(9 * o);
        X = new Float32Array(o);
        Y = new Float32Array(o);
        J = new Float32Array(o);
        U = new Float32Array(o);
        V = new Float32Array(o);
        reset();
    };

    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('resize', handleResize);

    return () => {
        running = false;
        scheduled = false;
        if (reqId) cancelAnimationFrame(reqId);
        window.removeEventListener('mousedown', handleMouseDown);
        window.removeEventListener('mouseup', handleMouseUp);
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('touchstart', handleTouchStart);
        window.removeEventListener('touchmove', handleTouchMove);
        window.removeEventListener('resize', handleResize);
        document.removeEventListener('visibilitychange', updateRunState);
        window.removeEventListener('scroll', updateRunState);
        motionQuery.removeEventListener('change', onMotionChange);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 h-full w-full pointer-events-none -z-10 bg-black touch-none"
      aria-hidden="true"
      role="presentation"
    />
  );
};

export default CliveFluidBackground;
