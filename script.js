function changeContent() {
      const textEl = document.getElementById('ChangingText');
      textEl.textContent = "Congratulations, you just made it more FUN!";
      textEl.style.color = "purple";
      textEl.style.fontWeight = "bold";
    }

   function triggerChaos() {
      const morph = document.getElementById('morph');
      const container = document.getElementById('container');

      // Remove the "Change Text & Style" button
      if (morph) {
        morph.remove();

        // Show warning message
        const warning = document.createElement('p');
        warning.textContent = "I told you not to click that!";
        warning.style.color = "red";
        warning.style.fontWeight = "bold";
        container.appendChild(warning);
      }

      // Toggle the dynamic box
      const existingBox = document.getElementById('dynamicBox');
      if (existingBox) {
        container.removeChild(existingBox);
      } else {
        const newBox = document.createElement('div');
        newBox.id = 'dynamicBox';
        container.appendChild(newBox);
      }
    }