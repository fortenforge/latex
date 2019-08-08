let problems = [
	{
		"title": "Quadratic Formula",
		"description": "Classic.",
		"latex": String.raw`x = \dfrac{-b\pm\sqrt{b^2-4ac}}{2a}`
	},
	{
		"title": "Pythagorean Theorem",
		"description": "Classic.",
		"latex": String.raw`c = \sqrt{a^2+b^2}`
	},
	{
		"title": "Sum of Squares",
		"description": "Classic.",
		"latex": String.raw`\sum_{i=1}^n i^2 = \frac{n(n+1)(2n+1)}{6}`
	},
	{
		"title": "Law of Cosines",
		"description": "Classic.",
		"latex": String.raw`c^2 = a^2 + b^2 - 2ab \cos \angle C`
	},
	{
		"title": "Legendre's formula",
		"description": "Floors.",
		"latex": String.raw`\nu_p(n!) = \sum_{i = 1}^{\infty} \left \lfloor \dfrac{n}{p^i} \right \rfloor`
	},
	{
		"title": "Euler's Identity",
		"description": "The most beautiful equation in mathematics.",
		"latex": String.raw`e^{\pi i} + 1 = 0`
	},
	{
		"title": "Euler's Troll Identity",
		"description": "Troll.",
		"latex": String.raw`\lceil e \rceil - \lfloor \pi \rfloor = 0`
	},
	{
		"title": "Normal Distribution",
		"description": "17 Equations That Changed the World.",
		"latex": String.raw`\Phi(x) = \frac{1}{\sqrt{2\pi \sigma}} e^{-\frac{(x - \mu)^2}{2\sigma^2}}`
	},
	{
		"title": "Fourier Transform",
		"description": "17 Equations That Changed the World.",
		"latex": String.raw`f(\omega) = \int_{-\infty}^\infty f(x) e^{-2\pi i x \omega} dx`
	},
	{
		"title": "Wave Equation",
		"description": "17 Equations That Changed the World.",
		"latex": String.raw`\frac{\partial^2u}{\partial t^2} = c^2 \frac{\partial^2 u}{\partial x^2}`
	},
	{
		"title": "Navier-Stokes Equation",
		"description": "17 Equations That Changed the World.",
		"latex": String.raw`\rho \left ( \frac{\partial \mathbf{v}}{\partial t} + \mathbf{v} \cdot \nabla \mathbf{v} \right) = - \nabla p + \nabla \cdot \mathbf{T} + \mathbf{f}`
	},
	{
		"title": "Schrodinger's Equation",
		"description": "17 Equations That Changed the World.",
		"latex": String.raw`ih\frac{\partial}{\partial t} \Psi = H \Psi`
	},
	{
		"title": "Black-Scholes Equation",
		"description": "17 Equations That Changed the World.",
		"latex": String.raw`\frac{\partial V}{\partial t} + \frac{1}{2} \sigma^2 S^2 \frac{\partial^2V}{\partial S^2} + rS \frac{\partial V}{\partial S} - rV = 0`
	},
	{
		"title": "Relativity",
		"description": "17 Equations That Changed the World.",
		"latex": String.raw`E=mc^2`
	},
	{
		"title": "Chaos Theory",
		"description": "17 Equations That Changed the World.",
		"latex": String.raw`x_{t+1} = k x_t (1 - x_t)`
	},
	{
		"title": "Definition of the Derivative",
		"description": "17 Equations That Changed the World.",
		"latex": String.raw`\frac{df}{dx} = \lim_{h \to 0} \frac{f(t + h) - f(t)}{h}`
	},
	{
		"title": "Euler's Formula for Polyhedra",
		"description": "17 Equations That Changed the World.",
		"latex": String.raw`V - E + F = 2`
	},
	{
		"title": "Gravitation",
		"description": "17 Equations That Changed the World.",
		"latex": String.raw`F = \frac{Gm_1m_2}{d^2}`
	},
	{
		"title": "AM-GM",
		"description": "Fun",
		"latex": String.raw`\frac{x_1 + x_2 + \cdots + x_n}{n} \ge \sqrt[n]{x_1 \cdot x_2 \cdots x_n}`
	},
	{
		"title": "Stirling's Approximation",
		"description": "Fun",
		"latex": String.raw`n! \approx \sqrt{2\pi n} \left ( \frac{n}{e}\right )^n`
	},
	{
		"title": "Stokes' theorem",
		"description": "Fun",
		"latex": String.raw`\iint_S \nabla \times \mathbf{F} \cdot d\mathbf{S} = \oint_\Gamma \mathbf{F} \cdot d \mathbf{\Gamma} `
	},
	{
		"title": "Divergence theorem",
		"description": "Fun",
		"latex": String.raw`\iiint_V (\nabla \cdot \mathbf{F}) dV = \oiint_S (\mathbf{F} \cdot \mathbf{n}) dS`
	},
	{
		"title": "Cauchy-Schwarz Inequality",
		"description": "Fun",
		"latex": String.raw`|\langle \mathbf{u}, \mathbf{v} \rangle|^2 \le \langle \mathbf{u}, \mathbf{u} \rangle \cdot \langle \mathbf{v} , \mathbf{v} \rangle`
	},
	{
		"title": "Area of a circle",
		"description": "Simple",
		"latex": String.raw`A = \pi r^2`
	},
	{
		"title": "Definition of tau",
		"description": "Troll.",
		"latex": String.raw`\tau = 2\pi`
	},
	{
		"title": "Sophie Germain Identity",
		"description": "Simple.",
		"latex": String.raw`a^4 + 4b^4 = (a^2 + 2ab + 2b^2)(a^2 -2ab + 2b^2)`
	},
	{
		"title": "Pascal's Identity",
		"description": "Classic.",
		"latex": String.raw`\binom{n}{k} = \binom{n-1}{k} + \binom{n-1}{k-1}`
	},
	{
		"title": "Hockey-stick identity",
		"description": "Classic.",
		"latex": String.raw`\sum_{i=r}^n \binom{i}{r} = \binom{n+1}{r+1}`
	},
	{
		"title": "Vandermonde's identity",
		"description": "Classic.",
		"latex": String.raw`\binom{m + n}{r} = \sum_{k = 0}^r \binom{m}{k} \binom{n}{r-k}`
	},
	{
		"title": "Combinations",
		"description": "Simple.",
		"latex": String.raw`\binom{n}{k} = \frac{n!}{k!(n-k)!}`
	},
	{
		"title": "Hein's identity",
		"description": "No idea what this is. Looks cool tho.",
		"latex": String.raw`\frac{1}{\sqrt{z - \cos \psi}} = \frac{\sqrt{2}}{\pi} \sum_{m = -\infty}^\infty Q_{m - \frac{1}{2}}(z) e^{im\psi}`
	},
	{
		"title": "Binomial identity",
		"description": "Classic.",
		"latex": String.raw`(x + y)^n = \sum_{k=0}^n \binom{n}{k} x^{n-k} y^k`
	},
	{
		"title": "Hermite's identity",
		"description": "Hadn't heard of this either.",
		"latex": String.raw`\sum_{k=0}^{n-1} \left \lfloor x + \frac{k}{n} \right \rfloor = \lfloor nx \rfloor`
	},
	{
		"title": "Matrix determinant lemma",
		"description": "Or this lmao.",
		"latex": String.raw`\det (\mathbf{A} + \mathbf{u}\mathbf{v}^{\intercal}) = (1 + \mathbf{v}^\intercal \mathbf{A}^{-1} \mathbf{u}) \det (\mathbf{A})`
	},
	{
		"title": "Euler product of Riemann-Zeta function",
		"description": "Classic.",
		"latex": String.raw`\zeta(s) = \sum_{n=1}^\infty \frac{1}{n^s} = \prod_{p \in \mathbb{P}} \frac{1}{1 - p^{-s}}`
	},
	{
		"title": "Irrationality of the square root of 2",
		"description": "I just really wanted to keep using \\mathbb.",
		"latex": String.raw`\sqrt{2} \notin \mathbb{Q}`
	},
	{
		"title": "Heron's Formula",
		"description": "Classic.",
		"latex": String.raw`[\triangle ABC] = \sqrt{s(s-a)(s-b)(s-c)}`
	},
	{
		"title": "Heisenberg's Uncertainty Principle",
		"description": "Classic.",
		"latex": String.raw`\Delta x \Delta p \approx \hbar`
	},
	{
		"title": "Continuted Fraction for pi",
		"description": "@InertialObservr",
		"latex": String.raw`\frac{\pi}{2} = 1 + \frac{1}{1 + \frac{1}{\frac{1}{2} + \frac{1}{\frac{1}{3} + \frac{1}{\frac{1}{4} + \ddots}}}}`
	},
	{
		"title": "Sophomore's Dream",
		"description": "Cool.",
		"latex": String.raw`\int_0^1 x^{-x} dx = \sum_{n=1}^\infty n^{-n}`
	},
	{
		"title": "Cool expression involving pi and e",
		"description": "@InertialObservr",
		"latex": String.raw`\prod_{n=2}^\infty e \left (1 - \frac{1}{n^2} \right)^{n^2} = \frac{\pi}{e \sqrt{e}}`
	},
	{
		"title": "Nested square root representation of the golden ratio",
		"description": "@InertialObservr",
		"latex": String.raw`\phi = \sqrt{1 + \sqrt{1 + \sqrt{1 + \sqrt{1 + \cdots}}}}`
	},
	{
		"title": "The sum of all positive integers",
		"description": "Troll.",
		"latex": String.raw`\sum_{n = 1}^\infty n = -\frac{1}{12}`
	},
	{
		"title": "Inverse of a complex number",
		"description": "Gotta know \\bar man",
		"latex": String.raw`z^{-1} = \frac{\bar{z}}{|z|^2}, \forall z \neq 0`
	},
	{
		"title": "Definition of convolution",
		"description": "Shout out to 6.003",
		"latex": String.raw`(f * g)(t) = \int_{-\infty}^\infty f(\tau) g(t - \tau) d\tau`
	},
	{
		"title": "Definition of Kronecker Delta function",
		"description": "{cases} ftw",
		"latex": String.raw`\delta_{i,j} = \begin{cases} 0 & i \neq j \\ 1 & i = j \end{cases}`
	},
	{
		"title": "Bayes' theorem",
		"description": "bae's theorem",
		"latex": String.raw`P(A | B) = \frac{P(B|A)P(A)}{P(B)}`
	},
	{
		"title": "Probability density function of Student's t-distribution",
		"description": "fun",
		"latex": String.raw`f(t) = \frac{\Gamma \left ( \frac{\nu + 1}{2} \right )}{\sqrt{\nu \pi} \Gamma \left ( \frac{\nu}{2}\right)} \left ( 1 + \frac{t^2}{\nu} \right) ^{- \frac{\nu + 1}{2}}`
	},
	{
		"title": "De Morgan's laws",
		"description": "fun",
		"latex": String.raw`\neg (P \wedge Q ) \vdash (\neg P) \vee (\neg Q)`
	},
	{
		"title": "Principle of Inclusion-Exclusion",
		"description": "for dummies",
		"latex": String.raw`|A \cup B| = |A| + |B| - |A \cap B|`
	},
	{
		"title": "General Principle of Inclusion-Exclusion",
		"description": "for galaxy brains",
		"latex": String.raw`\left | \bigcup_{i = 1}^n A_i \right | = \sum_{\emptyset \neq J \subseteq \{1, \dots, n\}} (-1)^{|J| + 1} \left | \bigcap_{j \in J} A_j \right |`
	},
	{
		"title": "Determinant of a 2 x 2 matrix",
		"description": "{matrix}",
		"latex": String.raw`\det \begin{bmatrix} a & b \\ c & d \end{bmatrix} = ad - bc`
	},
	{
		"title": "Sawtooth funnction",
		"description": "mathbb cases floors, this has it all",
		"latex": String.raw`S(x) = \begin{cases} x - \lfloor x \rfloor - 1/2, & x \in \mathbb{R} \setminus \mathbb{Z} \\ 0, & x \in \mathbb{Z} \end{cases}`
	},
	{
		"title": "Quantum Fourier transform",
		"description": "bra ket notation is fun",
		"latex": String.raw`|x\rangle \mapsto \frac{1}{\sqrt{N}} \sum_{k = 0}^{N-1} \omega_x^k |k\rangle`
	},
	{
		"title": "Recursive definition of the Hadamard transform",
		"description": "matrix in cases",
		"latex": String.raw`H_m = \begin{cases} 1 & m = 0 \\ \frac{1}{\sqrt{2}}\begin{pmatrix} H_{m-1} & H_{m-1} \\ H_{m-1} & -H_{m-1}\end{pmatrix} & m > 0\end{cases}`
	},
	{
		"title": "Wigner transform of the density matrix",
		"description": "I know some of these words",
		"latex": String.raw`W(x,p) = \frac{1}{\pi \hbar} \int_{-\infty}^\infty \langle x + y | \hat{\rho} | x - y \rangle e^{-2ipy/\hbar} dy`
	},
	{
		"title": "Axiom of Choice",
		"description": "~~controversial~~",
		"latex": String.raw`\forall X \left [ \varnothing \notin X \implies \exists f:X \to \bigcup X \  \forall A \in X (f(A) \in A) \right]`
	},
	{
		"title": "Definition of Graham's number",
		"description": "G = g_{64}",
		"latex": String.raw`g_n = \begin{cases} 3 \uparrow \uparrow \uparrow \uparrow 3, & n = 1 \\ 3 \uparrow^{g_{n-1}} 3, & n \ge 2,n \in \mathbb{N} \end{cases}`
	},
	{
		"title": "Burnside's Lemma",
		"description": "The Lemma that is not Burnside's",
		"latex": String.raw`|X/G| = \frac{1}{|G|} \sum_{g \in G} |X^g|`
	},
	{
		"title": "Continuum Hypothesis",
		"description": "independent of ZFC!",
		"latex": String.raw`\aleph_0 = |\mathbb{N}|, \ \mathfrak{c} = |\mathbb{R}| \\ \nexists A : \aleph_0 < |A| < \mathfrak{c}`
	},
	{
		"title": "Spectral Decomposition of a matrix",
		"description": "derived from memory",
		"latex": String.raw`A = \begin{pmatrix} | & | & & | \\ \mathbf{v_1} & \mathbf{v_2} & \cdots & \mathbf{v_n} \\ | & | & & | \end{pmatrix} \begin{pmatrix} \lambda_1 & & & \\ & \lambda_2 & & \\ & & \ddots & \\ & & & \lambda_n \end{pmatrix} \begin{pmatrix} | & | & & | \\ \mathbf{v_1} & \mathbf{v_2} & \cdots & \mathbf{v_n} \\ | & | & & | \end{pmatrix} ^ {-1}`
	},
	{
		"title": "Trigonometric identity",
		"description": "basically just the Pythagorean theorem",
		"latex": String.raw`\sin^2 \theta + \cos^2 \theta = 1`
	},
	{
		"title": "Double angle formulae",
		"description": "back to basics",
		"latex": String.raw`\sin(2\theta) = 2\sin(\theta)\cos(\theta) \\  \cos(2\theta) = \cos^2(\theta) - \sin^2(\theta)`
	},
	{
		"title": "Fermat's Last Theorem",
		"description": "have a marvelous proof, but this description's too small to contain it",
		"latex": String.raw`\nexists \ \{x,y,z,n\} \in \mathbb{N}, n > 2 : x^n + y^n = z^n`
	},
	{
		"title": "Fermat's Little Theorem",
		"description": "fermat's itty bitty theorem",
		"latex": String.raw`a^p \equiv a \pmod{p}`
	},
	{
		"title": "Euler's Theorem",
		"description": "totients",
		"latex": String.raw`\gcd(a, n) = 1 \implies a^{\varphi(n)} \equiv 1 \pmod{n}`
	},
	{
		"title": "QM-AM-GM-HM for 3 variables",
		"description": "cool-looking",
		"latex": String.raw`\sqrt{\frac{a^2 + b^2 + c^2}{3}} \ge \frac{a + b + c}{3} \ge \sqrt[3]{abc} \ge \frac{3}{\frac{1}{a} + \frac{1}{b} + \frac{1}{c}}`
	},
	{
		"title": "Law of Sines",
		"description": "threw in the circumradius as well",
		"latex": String.raw`\frac{a}{\sin \angle A} = \frac{b}{\sin \angle B} = \frac{c}{\sin \angle C} = 2R`
	},
	{
		"title": "Integration by parts",
		"description": "it's just the product rule really",
		"latex": String.raw`\int udv = uv - \int v du`
	},
	{
		"title": "Definition of perfect numbers",
		"description": "shrug",
		"latex": String.raw`\left \{ n : \sum_{d | n}^{d<n} d  = n\right \}`
	},
	{
		"title": "Definition of a limit",
		"description": "good ol' delta and epsilon",
		"latex": String.raw`\lim_{x \to c} f(x) = L \implies \forall \epsilon > 0, \ \exists \ \delta > 0: 0 < |x-c| < \delta \implies |f(x)-L| < \epsilon`
	},
	{
		"title": "Area under error function",
		"description": "classic trick",
		"latex": String.raw`\int_{-\infty}^\infty e^{-x^2} dx = \sqrt{\int_{-\infty}^\infty \int_{-\infty}^\infty  e^{-x^2 - y^2} dxdy} = \sqrt{\int_0^{2\pi} \int_0^\infty e^{-r^2}rdrd\theta } = \sqrt{\pi}`
	},
	{
		"title": "Definition of an integral",
		"description": "why not",
		"latex": String.raw`\int_a^b f(x) dx = \lim_{k \to \infty} \left ( (b-a) \sum_{i = 1}^{k} \frac{f(a + i\frac{b-a}{k})}{k} \right )`
	},
	{
		"title": "Quantum Fourier transform",
		"description": "bra ket notation is fun",
		"latex": String.raw`|x\rangle \mapsto \frac{1}{\sqrt{N}} \sum_{k = 0}^{N-1} \omega_x^k |k\rangle`
	},
	{
		"title": "Recursive definition of the Hadamard transform",
		"description": "matrix in cases",
		"latex": String.raw`H_m = \begin{cases} 1 & m = 0 \\ \frac{1}{\sqrt{2}}\begin{pmatrix} H_{m-1} & H_{m-1} \\ H_{m-1} & -H_{m-1}\end{pmatrix} & m > 0\end{cases}`
	},
	{
		"title": "Wigner transform of the density matrix",
		"description": "I know some of these words",
		"latex": String.raw`W(x,p) = \frac{1}{\pi \hbar} \int_{-\infty}^\infty \langle x + y | \hat{\rho} | x - y \rangle e^{-2ipy/\hbar} dy`
	},
	{
		"title": "Axiom of Choice",
		"description": "~~controversial~~",
		"latex": String.raw`\forall X \left [ \varnothing \notin X \implies \exists f:X \to \bigcup X \  \forall A \in X (f(A) \in A) \right]`
	}
];
