const searchInput = document.querySelector('#searchInput');
const features = document.querySelectorAll('.feature');

if (searchInput) {
  searchInput.addEventListener('input', () => {
    const query = searchInput.value.trim().toLowerCase();

    features.forEach((feature) => {
      const text = feature.dataset.name + ' ' + feature.textContent;
      const match = text.toLowerCase().includes(query);
      feature.hidden = !match;
    });
  });
}

const addDemoControl = (target, html) => {
  if (!target) return;
  const controls = target.querySelector('.demo-controls');
  if (controls) return;

  const wrapper = document.createElement('div');
  wrapper.className = 'demo-controls';
  wrapper.innerHTML = html;
  target.appendChild(wrapper);
  return wrapper;
};

const demoContainer = document.querySelector('.demo-container');
if (demoContainer) {
  const box = demoContainer.querySelector('.container-box');
  const control = addDemoControl(
    demoContainer,
    '<label class="demo-control"><span>Largeur</span><input type="range" min="150" max="420" value="260"></label>'
  );
  const slider = control.querySelector('input');
  slider.addEventListener('input', () => {
    box.style.width = `${slider.value}px`;
  });
}

const balanceDemo = document.querySelector('.demo-balance');
if (balanceDemo) {
  const title = balanceDemo.querySelector('h3');
  const control = addDemoControl(
    balanceDemo,
    '<label class="demo-control"><span>Titre</span><input type="text" value="Un titre plus propre et plus lisible"></label>'
  );
  const input = control.querySelector('input');
  input.addEventListener('input', () => {
    title.textContent = input.value || 'Un titre plus propre et plus lisible';
  });
}

const colorDemo = document.querySelector('.demo-color');
if (colorDemo) {
  const boxes = colorDemo.querySelectorAll('.color-box');
  addDemoControl(
    colorDemo,
    '<label class="demo-control"><span>Palette</span><button type="button">Changer</button></label>'
  );
  const button = colorDemo.querySelector('button');
  button.addEventListener('click', () => {
    boxes[0].style.background = boxes[0].style.background.includes('2563eb')
      ? 'color-mix(in srgb, #16a34a 70%, #dcfce7 30%)'
      : 'color-mix(in srgb, #2563eb 70%, #dbeafe 30%)';
    boxes[1].style.background = boxes[1].style.background.includes('f97316')
      ? 'color-mix(in srgb, #8b5cf6 60%, #ede9fe 40%)'
      : 'color-mix(in srgb, #f97316 60%, #fef3c7 40%)';
  });
}

const propertyDemo = document.querySelector('.demo-property');
if (propertyDemo) {
  const bar = propertyDemo.querySelector('.progress-bar');
  const label = bar.querySelector('span');
  const control = addDemoControl(
    propertyDemo,
    '<label class="demo-control"><span>Progression</span><input type="range" min="0" max="100" value="72"></label>'
  );
  const slider = control.querySelector('input');
  slider.addEventListener('input', () => {
    const value = slider.value;
    propertyDemo.style.setProperty('--progress', value);
    bar.style.setProperty('--progress', value);
    label.textContent = `${value}%`;
  });
}

const layerDemo = document.querySelector('.demo-layer');
if (layerDemo) {
  addDemoControl(
    layerDemo,
    '<label class="demo-control"><span>Couche</span><button type="button">Activer le layer theme</button></label>'
  );

  const formButton = layerDemo.querySelector('.demo-control button');
  const demoButton = layerDemo.querySelector('.layer-button');

  formButton.addEventListener('click', () => {
    layerDemo.classList.toggle('is-enabled');
    const enabled = layerDemo.classList.contains('is-enabled');
    formButton.textContent = enabled ? 'Désactiver le layer theme' : 'Activer le layer theme';
    demoButton.textContent = enabled ? 'Bouton avec thème' : 'Bouton';
  });
}

const themeDemo = document.querySelector('.demo-lightdark');
if (themeDemo) {
  const card = themeDemo.querySelector('.theme-card');
  const control = addDemoControl(
    themeDemo,
    '<label class="demo-control"><span>Thème</span><button type="button">Basculer</button></label>'
  );
  const button = control.querySelector('button');
  button.addEventListener('click', () => {
    const darkMode = themeDemo.classList.toggle('is-dark');
    themeDemo.classList.toggle('is-light', !darkMode);
    card.textContent = darkMode ? 'Mode sombre activé' : 'Mode clair activé';
  });
}

const clampDemo = document.querySelector('.demo-clamp');
if (clampDemo) {
  const text = clampDemo.querySelector('p');
  const control = addDemoControl(
    clampDemo,
    '<label class="demo-control"><span>Largeur</span><input type="range" min="180" max="520" value="280"></label>'
  );
  const slider = control.querySelector('input');
  slider.addEventListener('input', () => {
    text.style.width = `${slider.value}px`;
  });
}

const ratioDemo = document.querySelector('.demo-ratio');
if (ratioDemo) {
  const box = ratioDemo.querySelector('.ratio-box');
  const control = addDemoControl(
    ratioDemo,
    '<label class="demo-control"><span>Largeur</span><input type="range" min="180" max="420" value="260"></label>'
  );
  const slider = control.querySelector('input');
  slider.addEventListener('input', () => {
    box.style.width = `${slider.value}px`;
  });
}
