import ReactDOMServer from 'react-dom/server';

/**
 * @classdesc Набор утилит, предназначенные для создания и удаления модальных окон.
 */
class ModalUtils {
  /**
   * @static
   * @method - Создает модальное окно путем рендеринга переданного элемента в корень документа.
   * @param {JSX.Element} Element - JSX-элемент
   * @param {string} id - Уникальный идентификатор (имя) модального окна.
   * @param {string} tagName - Наименование родительского тега для переданного элемента. По умолчанию div.
   * @return {() => void} - Функция удаления модального окна
   */
  static create<T extends JSX.Element>(
    Element: T,
    id?: string,
    tagName: keyof HTMLElementTagNameMap = 'div'
  ): () => void {
    const str = ReactDOMServer.renderToStaticMarkup(Element);
    const dom = document.createElement(tagName);
    dom.innerHTML = str;
    dom.className = 'modal';

    document.body.append(dom as ChildNode);

    if (id) {
      dom.id = id;
    }

    return () => dom.remove();
  }

  /**
   * @static
   * @method - Удаляет модальное окно.
   * @param {string} id - Уникальный идентификатор модального окна, переданный в метод create.
   * @return {void}
   */
  static remove(id: string) {
    const modal = document.getElementById(id);

    if (modal) {
      modal.remove();
    }
  }

  /**
   * @static
   * @method - Удаляет все модальные окна, созданные путем вызова метода create.
   * @return {void}
   */
  static removeAll() {
    const modals = Array.from(document.getElementsByClassName('modal'));

    modals.forEach(modal => {
      modal.remove();
    });
  }
}

export default ModalUtils;
