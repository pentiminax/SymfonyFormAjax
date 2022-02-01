<?php

namespace App\Form\Type;

use App\Entity\Visibility;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;

class VideoType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('title', TextType::class, [
                'label' => 'Titre (obligatoire)',
            ])
            ->add('description', TextareaType::class, [
                'attr' => [
                    'class' => 'form-control'
                ],
                'label' => 'Description',
                'required' => false
            ])
            ->add('video', FileType::class, [
                'label' => 'Vidéo (obligatoire)'
            ])
            ->add('thumbnail', FileType::class, [
                'label' => 'Miniature (obligatoire)'
            ])
            ->add('visibility', EntityType::class, [
                'class' => Visibility::class,
                'choice_label' => 'label',
                'expanded' => true,
                'label' => 'Visibilité',
                'multiple' => false
            ])
            ->add('save', SubmitType::class, [
                'attr' => [
                    'class' => 'btn btn-primary'
                ],
                'label' => 'Enregistrer'
            ]);
    }
}