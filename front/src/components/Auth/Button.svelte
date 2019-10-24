
<button class="Button">
  <slot></slot>
</button>

<style>

.Button {
  background-color: transparent;
  font-size: 1.1em;
  color: var(--green);
  border: 1px solid var(--green);
  border-radius: 100px;
  padding: 8px 38px;
  cursor: pointer;
  transition-duration: .2s;
}

.Button:hover {
  color: white;
  background-color: var(--green);
}

</style>
